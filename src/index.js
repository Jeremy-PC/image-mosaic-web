export default class {
  constructor(options) {
    this.canvas = options.el;
    this.context = "";
    // 马赛克的大小
    this.quan = options.quan || 3;
    // 一次操作包含马赛克的个数
    this.num = options.num || 9;
    // 画布的宽
    this.width = options.width;
    // 画布的高
    this.height = options.height;
    // 图片的url
    this.url = options.url;
    // 每次下笔前先保存
    this.lastImgArr = [];
    this.start = function (canvas, context, quan, num, lastImgArr) {
      function drawLine(canvas, context, quan, num, dx, dy) {
        //原始图像
        let originalImgData = context.getImageData(
          0,
          0,
          canvas.width,
          canvas.height
        );
        let originalPxData = originalImgData.data;
        //用于循环修改
        let modifyImgData = context.getImageData(
          0,
          0,
          canvas.width,
          canvas.height
        );
        let modifyPxData = modifyImgData.data;

        for (
          let i = dx - quan * num;
          i < dx + quan * num;
          i = i + 2 * quan + 1
        ) {
          for (
            let j = dy - quan * num;
            j < dy + quan * num;
            j = j + 2 * quan + 1
          ) {
            if (
              !(
                (i == dx - quan * num && j == dy - quan * num) ||
                (i == dx - quan * num && j == dy - quan * num + 2 * quan + 1) ||
                (i == dx - quan * num && j == dy - quan * num + 4 * quan + 2) ||
                (i == dx - quan * num &&
                  j == dy - quan * num + 12 * quan + 6) ||
                (i == dx - quan * num &&
                  j == dy - quan * num + 14 * quan + 7) ||
                (i == dx - quan * num &&
                  j == dy - quan * num + 16 * quan + 8) ||
                (i == dx - quan * num + 16 * quan + 8 &&
                  j == dy - quan * num) ||
                (i == dx - quan * num + 16 * quan + 8 &&
                  j == dy - quan * num + 2 * quan + 1) ||
                (i == dx - quan * num + 16 * quan + 8 &&
                  j == dy - quan * num + 4 * quan + 2) ||
                (i == dx - quan * num + 16 * quan + 8 &&
                  j == dy - quan * num + 12 * quan + 6) ||
                (i == dx - quan * num + 16 * quan + 8 &&
                  j == dy - quan * num + 14 * quan + 7) ||
                (i == dx - quan * num + 16 * quan + 8 &&
                  j == dy - quan * num + 16 * quan + 8) ||
                (i == dx - quan * num + 2 * quan + 1 && j == dy - quan * num) ||
                (i == dx - quan * num + 4 * quan + 2 && j == dy - quan * num) ||
                (i == dx - quan * num + 12 * quan + 6 &&
                  j == dy - quan * num) ||
                (i == dx - quan * num + 14 * quan + 7 &&
                  j == dy - quan * num) ||
                (i == dx - quan * num + 2 * quan + 1 &&
                  j == dy - quan * num + 16 * quan + 8) ||
                (i == dx - quan * num + 4 * quan + 2 &&
                  j == dy - quan * num + 16 * quan + 8) ||
                (i == dx - quan * num + 12 * quan + 6 &&
                  j == dy - quan * num + 16 * quan + 8) ||
                (i == dx - quan * num + 14 * quan + 7 &&
                  j == dy - quan * num + 16 * quan + 8)
              )
            ) {
              let sumR = 0;
              let sumG = 0;
              let sumB = 0;
              //找他周围的元素
              for (let x = -quan; x <= quan; x++) {
                for (let y = -quan; y <= quan; y++) {
                  let xx = i + x;
                  let yy = j + y;
                  let pp = yy * canvas.width + xx; //周围的元素。
                  sumR += originalPxData[pp * 4 + 0];
                  sumG += originalPxData[pp * 4 + 1];
                  sumB += originalPxData[pp * 4 + 2];
                }
              }

              let totlal = (2 * quan + 1) * (2 * quan + 1);
              let avgR = sumR / totlal;
              let avgG = sumG / totlal;
              let avgB = sumB / totlal;

              for (let x = -quan; x <= quan; x++) {
                for (let y = -quan; y <= quan; y++) {
                  let xx = i + x;
                  let yy = j + y;
                  let pp = yy * canvas.width + xx; //周围的元素。
                  modifyPxData[pp * 4 + 0] = avgR;
                  modifyPxData[pp * 4 + 1] = avgG;
                  modifyPxData[pp * 4 + 2] = avgB;
                }
              }
            }
          }
        }

        context.putImageData(
          modifyImgData,
          0,
          0,
          0,
          0,
          canvas.width,
          canvas.height
        );
      }

      canvas.onmousedown = function (ev) {
        //每次下笔前先保存
        lastImgArr.push(
          context.getImageData(0, 0, canvas.width, canvas.height)
        );
        var ev = ev || window.event;
        var dx = ev.clientX;
        var dy = ev.clientY;
        drawLine(canvas, context, quan, num, dx, dy);
        document.onmousemove = function (ev) {
          var ev = ev || window.event;
          var mx = ev.offsetX;
          var my = ev.clientY;
          // (quan*马赛克个数*2)的平方
          if (
            Math.pow(dx - mx, 2) + Math.pow(dy - my, 2) >=
            Math.pow(quan * num, 2)
          ) {
            drawLine(canvas, context, quan, num, mx, my);
            dx = mx;
            dy = my;
          }
        };
        document.onmouseup = function () {
          document.onmousemove = null;
          document.onmouseup = null;
        };
      };
    };
    this.dataURLtoFile = function (dataurl, filename = "file") {
      let arr = dataurl.split(",");
      let mime = arr[0].match(/:(.*?);/)[1];
      let suffix = mime.split("/")[1];
      let bstr = window.atob(arr[1]);
      let n = bstr.length;
      let u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], `${filename}.${suffix}`, { type: mime });
    };
  }
  init() {
    if (this.canvas && this.canvas !== "" && this.canvas.tagName === "CANVAS") {
      this.context = this.canvas.getContext("2d");
      if (this.url && this.url !== "") {
        // 创建image对象
        const imgObj = new Image();
        // 用于解决图片跨域问题，但在chrome下依旧无效，建议起个node服务或者用safari打开
        imgObj.crossOrigin = "Anonymous";
        imgObj.src = this.url;
        const self = this;
        //待图片加载完后，将其显示在canvas上
        imgObj.onload = function () {
          self.canvas.width = self.width || this.width;
          self.canvas.height = self.height || this.height;
          // this即是imgObj,保持图片的原始大小
          self.context.drawImage(
            this,
            0,
            0,
            self.width || this.width,
            self.height || this.height
          );
          self.start(
            self.canvas,
            self.context,
            self.quan,
            self.num,
            self.lastImgArr
          );
        };
      } else {
        console.error("传入的url地址不存在!");
        throw new Error("传入的url地址不存在!");
      }
    } else {
      console.error("传入的节点并非canvas标签!");
      throw new Error("传入的节点并非canvas标签!");
    }
  }
  update(url) {
    this.url = url;
    this.onClear();
    this.init();
  }
  // 撤销修改
  onRevoked() {
    if (this.context !== "" && this.lastImgArr && this.lastImgArr.length) {
      this.context.putImageData(this.lastImgArr.pop(), 0, 0);
    }
  }
  onSave() {
    const base64 = this.canvas.toDataURL("image/png");
    const file = this.dataURLtoFile(base64, "图片1");
    return { file, img: base64 };
  }
  onClear() {
    this.lastImgArr = [];
  }
}

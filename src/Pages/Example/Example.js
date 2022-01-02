import React from "react";
import { Image } from "antd";
export default function Example() {
  return (
    <Image.PreviewGroup
      previewPrefixCls="image"
      style={{ height: "100%", display: "flex" }}
    >
      <Image
        width={200}
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
      />
      <p className=" flex items-center "></p>
      <Image
        width={200}
        style={{ height: "100%" }}
        src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
      />
    </Image.PreviewGroup>
  );
}

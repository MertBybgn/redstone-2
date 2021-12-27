import React from "react";
import Avatar from "../../components/Avatar";
import BackgroundImg from "../../components/BackgroundImg";

export default function Example() {
  return (
    <div>
      <Avatar rounded="full" size="sm" />

      <Avatar rounded="full" size="base" />
      <Avatar rounded="full" size="xl" />
      <Avatar rounded="full" size="xxl" />

      <BackgroundImg size="sm" />
      <BackgroundImg size="lg" />
    </div>
  );
}

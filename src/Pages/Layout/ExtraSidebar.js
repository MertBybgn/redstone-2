import React from "react";
import AddFollowWidget from "../../components/widgets/Addfollows/AddFollowWidget";
import TrendsWidget from "../../components/widgets/Trends/TrendsWidget";

export default function ExtraSidebar() {
  return (
    <div>
      <div className="mb-6">
        <TrendsWidget />
      </div>
      <div>
        <AddFollowWidget />
      </div>
    </div>
  );
}

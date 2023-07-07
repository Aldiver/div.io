import React from "react";

export const Buttons: React.FC = () => {
  return (
    <section className="flex items-center gap-5">
      <div> Search Bar</div>
      <div> Slot </div>
      <slot />
    </section>
  );
};

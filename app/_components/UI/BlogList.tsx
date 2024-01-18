import React from "react";
import BlogWidget from "./BlogWidget";
import Button from "../Button";

export default function BlogList() {
  return (
    <div className="container mx-auto pb-100">
      <div className="grid md:grid-cols-3 gap-x-[25px] gap-y-[50px]">
        <BlogWidget />
        <BlogWidget />
        <BlogWidget />
        <BlogWidget />
        <BlogWidget />
        <BlogWidget />
        <BlogWidget />
        <BlogWidget />
        <BlogWidget />
      </div>
      <div className="flex items-center justify-center mx-auto mt-50">
        <Button type="submit" variant="borderGold" size="normal" pill uppercase>
          Load More
        </Button>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { SharedFilters } from "../widgets";
import { ISharedFilters, ISortState } from "../../types";

export const Filters = ({
  selectItems = [],
}: Omit<ISharedFilters, "onSearchClick" | "setSort" | "sort">) => {
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<ISortState>({
    field: "",
    order: "desc",
  });

  return (
    <>
      {search}
      <SharedFilters
        selectItems={selectItems}
        onSearchClick={(value: string) => setSearch(value)}
        setSort={setSort}
        sort={sort}
      />
    </>
  );
};

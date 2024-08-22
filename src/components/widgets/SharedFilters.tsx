"use client";
import { ISharedFilters } from "@/types";
import {
  Button,
  Heading,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { FC, useState } from "react";
import { FaSearch } from "react-icons/fa";

export const SharedFilters: FC<ISharedFilters> = ({
  onSearchClick,
  selectItems = [],
  setSort,
  sort,
}) => {
  const [insideSearch, setInsideSearch] = useState<string>("");

  const handleSearch = () => onSearchClick(insideSearch);

  const onValueChange = (theField: "order" | "field", value: string) =>
    setSort({ ...sort, [theField]: value });

  return (
    <div className="space-y-4 ">
      <Heading isBold variant="h4">
        Filters :
      </Heading>
      <div className="flex flex-wrap items-center justify-between gap-5">
        <div className="flex w-full gap-2 md:w-1/2">
          <Input
            placeholder="Search..."
            value={insideSearch}
            onChange={(e) => setInsideSearch(e?.target.value)}
          />
          <Button onClick={handleSearch}>
            <FaSearch />
          </Button>
        </div>
        <div className="flex w-full items-center justify-center gap-2 md:w-auto">
          <div className="flex items-center justify-center gap-2">
            <Label>Sort</Label>
            <Select
              onValueChange={(val: string) => onValueChange("field", val)}
              defaultValue={sort.field}
            >
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Field..." />
              </SelectTrigger>
              <SelectContent>
                {selectItems.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <Label className=" text-slate-300" htmlFor="desc">
              By
            </Label>
            <RadioGroup
              onValueChange={(val: string) => onValueChange("order", val)}
              defaultValue={sort.order}
              className="flex border border-input p-[9px] rounded"
            >
              <div className="flex items-center space-x-1">
                <RadioGroupItem value="desc" id="desc" />
                <Label className="text-[10px]" htmlFor="desc">
                  Desc
                </Label>
              </div>
              <div className="flex items-center space-x-1">
                <RadioGroupItem value="asc" id="asc" />
                <Label className="text-[10px]" htmlFor="asc">
                  Asc
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

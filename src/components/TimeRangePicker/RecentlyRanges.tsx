import { memo } from "react";
import dayjs from "dayjs";

import { displayTimeFormat, RangeOption } from "./rangeOptions";

type RecentlyRangesProps = {
  recentRanges: RangeOption[];
  applyTimeRange: (val: RangeOption) => void;
};

const RecentlyRangesFC = ({
  recentRanges = [],
  applyTimeRange = () => {}
}: RecentlyRangesProps) => (
  <div>
    {Boolean(recentRanges.length) && (
      <div className="text-gray-500 text-base my-2 px-3 font-semibold">
        Recently used absolute ranges
      </div>
    )}
    <div className="overflow-y-auto max-h-24">
      {recentRanges?.map((range) => (
        <button
          type="button"
          onClick={() => applyTimeRange(range)}
          key={`${dayjs(range.from).format()}${dayjs(range.to).format()}`}
          className="hover:bg-gray-100 flex justify-between w-full cursor-pointer py-1.5 px-3 text-sm"
        >
          {`${dayjs(range.from).format(displayTimeFormat)} to ${dayjs(
            range.to
          ).format(displayTimeFormat)}`}
        </button>
      ))}
    </div>
  </div>
);

export const RecentlyRanges = memo(RecentlyRangesFC);

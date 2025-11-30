import { Noto_Sans } from "next/font/google";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const notoSans = Noto_Sans({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export default function Setting() {
  return (
    <>
      <div className={`${notoSans.className}`}>
        <form>
          <div className="flex flex-col gap-3.5">
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-semibold text-foreground-tertiary" htmlFor="name">
                Name
              </Label>
              <Input placeholder="Enter username" className="text-base" id="name" type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-semibold text-foreground-tertiary" htmlFor="name">
                Password
              </Label>
              <Input placeholder="Enter password" id="password" type="text" />
            </div>
          </div>
        </form>
        <p className="text-xs text-foreground-tertiary mt-2">Your password is between 4 and 12 characters</p>
      </div>
      <div className="w-full">
        <Button className="bg-accent text-xs font-bold px-[120px] ml-auto block mt-3.5">Save</Button>
      </div>
    </>
  );
}

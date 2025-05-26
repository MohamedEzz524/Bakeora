import DrawLi from "./DrawLi";
import { navigation } from "./_Data/_Blog";
import Search from "./SearchInput";

export default function AsideSection() {
  return (
    <div className="w-full h-full lg:w-[23%] ">
      <Search size={100} border={true} />
      {/* Navigation */}
      <div className="">
        {navigation.map(({ id, title, data }) => (
          <div
            key={id}
            className="py-[40px] border-black/10 [&:not(:last-child)]:border-b"
          >
            <h3 className="text-title mb-5 normal-body font-Alegreya">
              {title}
            </h3>
            <DrawLi data={data} type="link" />
          </div>
        ))}
      </div>
    </div>
  );
}

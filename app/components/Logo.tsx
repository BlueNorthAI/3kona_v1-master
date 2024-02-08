// import logo from ".././styles/logo.png";
import { type LinksFunction } from "@remix-run/node";

import logoAssetUrl from "~/assets/logo.png";

export const links: LinksFunction = () => {
  return [{ rel: "icon", type: "image/svg+xml", href: logoAssetUrl }];
};

function LogomarkPaths() {
  return <img className="" src={logoAssetUrl} alt="" width={40} height={40} />;
}

export function Logomark() {
  return (
    <div>
      <LogomarkPaths />
    </div>
  );
}

export function Logo() {
  return (
    <div className="flex items-center " aria-hidden="true">
      <LogomarkPaths />
      <h1 className="ml-2 flex items-center text-2xl font-bold tracking-wide">
        BlueNorth AI
      </h1>
    </div>
  );
}

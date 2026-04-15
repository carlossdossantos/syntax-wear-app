import { Copyright } from "../Copyright";
import { MenuItems } from "../MenuItems";
import { SocialLinks } from "../SocialLinks";
import { Subscription } from "../SubscriptionForm";

export const Footer = () => {
  return (
    <footer className="bg-footer-bg">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between py-10 px-2 gap-2">

          <div className="flex flex-col gap-7.5 min-w-86">
            <Subscription />

            <SocialLinks />
          </div>

          <MenuItems />
        </div>
        <Copyright />
      </div>
    </footer>
  );
};

import { config } from "../../../lib/project.config";

export const FooterDashboard = () => {
  return (
    <footer className="border-t py-3 border-input">
      <div className="container space-y-6">
        <div className="flex items-center gap-5 justify-between">
          <h5 className="text-base font-bold">{config.name}</h5>
          <p className="text-sm">
            Powered By <strong className="underline">DAMRI ABDELLAH</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};

import { config } from "../../../lib/project.config";

export const FooterDashboard = () => {
  return (
    <footer className="border-t py-3 border-input">
      <div className="container space-y-6">
        <div className="flex items-center gap-5 justify-between">
          <h1 className="text-lg font-bold">{config.name}</h1>
          <p>
            Powered By <strong className="underline">DAMRI ABDELLAH</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};

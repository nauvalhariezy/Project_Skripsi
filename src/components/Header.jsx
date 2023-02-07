export const Header = ({ category, title }) => (
  <div className=" mb-4">
    <p className="text-lg text-gray-400 capitalize">{category}</p>
    <p className="text-3xl font-bold tracking-tight text-slate-900 capitalize">
      {title}
    </p>
  </div>
);

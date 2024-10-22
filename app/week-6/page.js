import ItemList from './item-list';

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-black pt-8">
      <main className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-white mb-4">Shopping List</h1>
        <ItemList/>
      </main>
    </div>
  );
};

export default Page;
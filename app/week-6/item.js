export default function Item({name, quantity, category}){
    return(
        <div className="bg-slate-950">
            <section className="bg-slate-900 m-4 p-2 max-w-sm">
                <h2 className="font-bold text-xl">{name}</h2>
                <p className="text-sm">Buy {quantity} in {category}</p>
            </section>
            

        </div>

      

    );
}


//make mikeup of causes
export default function Causes() {
  const causes = [
    { id: 1, name: "Cause 1", description: "Description of Cause 1" },
    { id: 2, name: "Cause 2", description: "Description of Cause 2" },
    { id: 3, name: "Cause 3", description: "Description of Cause 3" },
  ];

    return (
        <div>
            <h1 className="text-3xl font-bold underline">Causes</h1>
            <ul>
                {causes.map((cause) => (
                    <li key={cause.id}>
                        <h2 className="text-xl font-semibold">{cause.name}</h2>
                        <p>{cause.description}</p>
                    </li>
                ))} 
            </ul>
        </div>
    );
}
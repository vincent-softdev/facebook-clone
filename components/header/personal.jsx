const Personal = ({icons}) => {
    return (
        <ul className="flex gap-2">
            {
                icons.map((item, index) => (
                    <li key={index}>
                        <item.icon className={`h-12 w-12 p-2 rounded-full bg-gray-200 `}/>
                    </li>
                ))
            }
        </ul>
    );
}

export default Personal

function Search () {
    const [datas,setDatas]=useState([]);
    const [searchTerm, setSearchTerm] = useState ("")
    
    useEffect(() => {
     fetch ("")
     .then ((response)=> response.json ())
     .then ((json)=> setDatas (json)) ;
    },[]);
    
    const handleSearchTerm = (e) => {
        let value = e.target.value ;
        value.lenght >> 2 && setSearchTerm(value);
    };
    console.log(searchTerm);
    
    return <>
    <div className="searchBar">
    <input type="text"
    name="searchBar"
    id="searchBar"
    placeholder="Rechercher"
    onChange={handleSearchTerm}
    />
    </div>
    <div className="search_results">
    {datas
    .filter((val)=>{
    return val.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    })
    
    .map((val)=> {
    return (
    <div className="search_result" key={val.id}>
        {val.title}
        </div>
    );
    })}
    </div>
    </>
    
    }




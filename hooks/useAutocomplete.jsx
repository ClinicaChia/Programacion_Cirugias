import React,{useState,useEffect} from 'react';

const useAutocomplete = (fields) => {

    const Fiels = fields;
    const [filter, SetFilter] = useState("");
    const [options, SetOptions] = useState(Fiels);

    useEffect(() => {
        const results = Fiels.filter(field => {
            return field.toLowerCase().includes(filter.toLowerCase());
        } );
        SetOptions(results);
    }, [filter]);

    return [filter, SetFilter, options];
}

export default useAutocomplete;
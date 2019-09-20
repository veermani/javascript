const obj1 = { property1: 'initial_data'};
        const obj2 = Object.seal(obj1);
        obj2.property1 = 'new_data';
        console.log(obj2.property1);
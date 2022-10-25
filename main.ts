import _ from "lodash"

const camelize = (obj: any) =>
_.transform(obj,(acc: any, value: any, key: any, target: any) => { 
    
    const camelKey = _.isArray(target) ? key : _.camelCase(key);

    acc[camelKey] = value !== null && typeof value === 'object' ? camelize(value) : value;
  });

const obj = {
  vt_core_random: {
    user_details: {
      first_name: 'xyz',
      last_name: 'abc',
      groups: [
        { id: 1, group_type: 'EXT' },
        { id: 2, group_type: 'INT' },
      ],
      address_type: { city_name: 'nashik', state: { code_name: 'MH', name: 'Maharashtra' } },
    },
  },
};

const result = camelize(obj);


const rawData ={
    first_name: "Altair",
    last_name: "Oltoir",
    addresses: [
        {
            city: "Nashik",
            state: {
                legal_code: "MH",
                legal_name: "Maharashtra"
            }
            },
            {
            city: "Pune",
            state: {
                legal_code: "MH",
                legal_name: "Maharashtra"
            }
            }
    ],
    groups: [
        {
            id: 1,
            group_type: "EXT"
        },
        {
            id: 2,
            group_type: "INT"
        }],

        sex: 'Male'

}
// const data = camelize(rawData);

console.log(result);

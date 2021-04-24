function AddSort() {
    let medications = [
  {
    "id": 50,
    "name": "Atorvastatin 10 MG Tablet",
    "description": "Tablet",
    "dosage": "10 MG",
    "directions": "take 1 tablet per day",
    "count": 90,
    "created_at": "2021-04-23T14:31:29.264Z",
    "updated_at": "2021-04-23T14:31:29.264Z"
  },
  {
    "id": 51,
    "name": "Donepezil HCL 5 MG Tablet",
    "description": "Tablet",
    "dosage": "5 MG",
    "directions": "take 1 tablet per day",
    "count": 90,
    "created_at": "2021-04-23T14:31:29.269Z",
    "updated_at": "2021-04-23T14:31:29.269Z"
  },
  {
    "id": 52,
    "name": "Letrozole 2.5 MG Tablet",
    "description": "Tablet",
    "dosage": "2.5 MG",
    "directions": "take 1 tablet per day",
    "count": 30,
    "created_at": "2021-04-23T14:31:29.273Z",
    "updated_at": "2021-04-23T14:31:29.273Z"
  },
  {
    "id": 53,
    "name": "Combigan Eye Drops",
    "description": "Eye Drops",
    "dosage": "5 mL",
    "directions": "take 1 drop in each eye twice a day",
    "count": 0,
    "created_at": "2021-04-23T14:31:29.275Z",
    "updated_at": "2021-04-23T14:31:29.275Z"
  },
  {
    "id": 54,
    "name": "Lumigan 0.01% Eye Drops",
    "description": "Eye Drops",
    "dosage": "2.5 mL",
    "directions": "take 1 drop in each eye in the evening once a day",
    "count": 0,
    "created_at": "2021-04-23T14:31:29.278Z",
    "updated_at": "2021-04-23T14:31:29.278Z"
  }
]
    
    let update = medications.sort((a, b) => 
    // firstItem.name - secondItem.name
    {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      }
    )
    
    // console.log (data.sort( ));
    // console.log (data.sort);
    console.log (update);
    return (
        <div>hello</div>
    )
}

export default AddSort
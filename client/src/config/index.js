
export const registerFormControls = [
    {
        name: 'userName',
        label: 'User Name',
        placehoder: 'Enter your user name',
        componentType : 'input',
        type : 'text',
    },
    {
        name: 'email',
        label: 'Email',
        placehoder: 'Enter your email',
        componentType : 'input',
        type : 'email',
    },
    {
        name: 'password',
        label: 'Password',
        placehoder: 'Enter your password',
        componentType : 'input',
        type : 'password',
    }
]

export const loginFormControls = [
    {
        name: 'email',
        label: 'Email',
        placehoder: 'Enter your email',
        componentType : 'input',
        type : 'email',
    },
    {
        name: 'password',
        label: 'Password',
        placehoder: 'Enter your password',
        componentType : 'input',
        type : 'password',
    }
]

export const addProductFormElements = [
    {
        label: "Title",
        name: "title",
        commonType: "input",
        type: "text",
        placehoder: "Enter product title",
    },
    {
        label: "Description",
        name: "description",
        componentType: "textarea",
        placehoder: "Enter product description",
    },
    {
        label: "Category",
        name: "category",
        componentType: "select",
        options: [
          { id: "notebooks&diary", label: "Notebooks & Diary" },
          { id: "pens", label: "Pens" },
          { id: "sticky_notes", label: "Sticky Notes" },
          { id: "erasers", label: "Erasers" },
          { id: "correction_tapes", label: "Correction Tapes" },
          { id: "paints", label: "Paints" },
          { id: "pencils", label: "Pencils" },
          { id: "art_essentials", label: "Art Essentials" },
          { id: "papers", label: "Papers" },
          { id: "others", label: "Others" },
        ],
        placehoder: "Select product category",
      },
      {
        label: "Sub-Category",
        name: "sub_category",
        componentType: "input",
        type: "text",
        placehoder: "Enter product sub category",
      },
      {
        label: "Price",
        name: "price",
        componentType: "input",
        type: "number",
        placehoder: "Enter product price",
      },
      {
        label: "Sale Price",
        name: "salePrice",
        componentType: "input",
        type: "number",
        placehoder: "Enter sale price (optional)",
      },
      {
        label: "Total Stock",
        name: "totalStock",
        componentType: "input",
        type: "number",
        placehoder: "Enter total stock",
      },
];
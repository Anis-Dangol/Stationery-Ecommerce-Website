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
        componentType: "input",
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
          { id: "writing_essentials", label: "Writing Essentials" },
          { id: "art_supplies", label: "Art Supplies" },
          { id: "craft_material", label: "Craft Material" },
          { id: "journaling", label: "Journaling" },
          { id: "office_essentials", label: "Office Essentials" },
          { id: "packing_supplies", label: "Packing Supplies" }
        ],
        placehoder: "Select product category",
      },
      {
        label: "Sub-Category",
        name: "sub_category",
        componentType: "select",
        options: [
          { id: "notebooks&diary", label: "Notebooks & Diary" },
          { id: "pens", label: "Pens" },
          { id: "sticky_notes", label: "Sticky Notes" },
          { id: "erasers&correction_tapes", label: "Erasers & Correction Tapes" },
          { id: "paints", label: "Paints" },
          { id: "pencils", label: "Pencils" },
          { id: "art_essentials", label: "Artist Essentials" },
          { id: "resin_art", label: "Resin Art" },
          { id: "model_making", label: "Model making" },
          { id: "papers", label: "Papers" },
          { id: "stickers", label: "Stickers" },
          { id: "tapes_adhesive", label: "Tapes & Adhesive" },
          { id: "office_essentials_items", label: "Office Essentials Items" },
          { id: "organizers", label: "Organizers" },
          { id: "hamper_box", label: "Hamper Box" },
          { id: "gift_decor_products", label: "Gift Decor Products" },
        ],
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

export const shoppingViewHeaderMenuItems = [
  {
    id : "home",
    label : "Home",
    path : "/shop/home",
  },
  {
    id : "writing_essentials",
    label : "Writing Essentials",
    path : "/shop/listing",
  },
  {
    id : "art_supplies",
    label : "Art Supplies",
    path : "/shop/listing",
  },
  {
    id : "craft_material",
    label : "Craft Material",
    path : "/shop/listing",
  },
  {
    id : "journaling",
    label : "Journaling",
    path : "/shop/listing",
  },
  {
    id : "office_essentials",
    label : "Office Essentials",
    path : "/shop/listing",
  },
  {
    id : "packing_supplies",
    label : "Packing Supplies",
    path : "/shop/listing",
  }
];

export const categoryOptionsMap = {
  'writing_essentials': 'Writing Essentials',
  'art_supplies': 'Art Supplies',
  'craft_material': 'Craft Material',
  'journaling': 'Journaling',
  'office_essentials': 'Office Essentials',
  'packing_supplies': 'Packing Supplies',
}

export const sub_categoryOptionsMap = {
    'notebooks&diary': 'Notebooks & Diary',
    'pens': 'Pens',
    'sticky_notes': 'Sticky Notes',
    'erasers&correction_tapes': 'Erasers & Correction Tapes',
    'paints': 'Paints',
    'pencils': 'Pencils',
    'art_essentials': 'Artist Essentials',
    'resin_art': 'Resin Art',
    'model_making': 'Model Making',
    'papers': 'Papers',
    'stickers': 'Stickers',
    'tapes_adhesive': 'Tapes & Adhesive',
    'office_essentials_items': 'Office Essentials Items',
    'organizers': 'Organizers',
    'hamper_box': 'Hamper Box',
    'gift_decor_products': 'Gift Decor Products'
};

export const filterOptions = {
  category: [
    { id: "writing_essentials", label: "Writing Essentials" },
    { id: "art_supplies", label: "Art Supplies" },
    { id: "craft_material", label: "Craft Material" },
    { id: "journaling", label: "Journaling" },
    { id: "office_essentials", label: "Office Essentials" },
    { id: "packing_supplies", label: "Packing Supplies" }
  ],
  sub_category: [
    { id: "notebooks&diary", label: "Notebooks & Diary" },
    { id: "pens", label: "Pens" },
    { id: "sticky_notes", label: "Sticky Notes" },
    { id: "erasers&correction_tapes", label: "Erasers & Correction Tapes" },
    { id: "paints", label: "Paints" },
    { id: "pencils", label: "Pencils" },
    { id: "art_essentials", label: "Artist Essentials" },
    { id: "resin_art", label: "Resin Art" },
    { id: "model_making", label: "Model Making" },
    { id: "papers", label: "Papers" },
    { id: "stickers", label: "Stickers" },
    { id: "tapes_adhesive", label: "Tapes & Adhesive" },
    { id: "office_essentials_items", label: "Office Essentials Items" },
    { id: "organizers", label: "Organizers" },
    { id: "hamper_box", label: "Hamper Box" },
    { id: "gift_decor_products", label: "Gift Decor Products" }
  ],
}

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
]

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
const product = [
    {
        id: 1,
        name: "Kids Headphones",
        price: "850.00",
        quantity: 1,
        image: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/Product1a_2000x.jpg?v=1596259840",
        imageSlick1: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/Product1b-Version1_2000x.jpg?v=1596259858",
        imageSlick2: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/Product1d_2000x.jpg?v=1596259858",
        imageSlick3: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/Product1c_Version1_2000x.jpg?v=1596259858",

    },
    {
        id: 2,
        name: "Light Headphones",
        price: "880.00",
        quantity: 1,
        image: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/Product2a_2000x.jpg?v=1596259890",
        imageSlick1: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/Product2b_Version1_2000x.jpg?v=1596259908",
        imageSlick2: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/Product2d_medium.jpg?v=1596259908",
        imageSlick3: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/Product2c_Version1_2000x.jpg?v=1596259905"

    },
    {
        id: 3,
        name: "On-Ear Headphones",
        price: "750.00",
        quantity: 1,
        image: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/Product3a_2000x.jpg?v=1596259963",
        imageSlick1: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/Product3c_Version1_2000x.jpg?v=1596259975",
        imageSlick2: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/Product3d_medium  .jpg?v=1596259977",
        imageSlick3: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/Product3c_Version1_2000x.jpg?v=1596259975"

    },
    {
        id: 4,
        name: "Leather Headset",
        price: "910.00",
        quantity: 1,
        image: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-42_713214f6-ce84-43f2-adba-7a13a882ead3_2000x.jpg?v=1595414449",
        imageSlick1: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-44_6a471e3a-e3bf-4760-a207-1883a4e30dcf.jpg?v=1595414449",
        imageSlick2: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-46_c1267b6c-75f2-4972-8187-4005be2c9060_medium.jpg?v=1595414449",
        imageSlick3: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-43_a2a643b4-63da-47c2-862a-e59120e7a606_2000x.jpg?v=1595414449"
    },
    {
        id: 5,
        name: "BT Headset",
        price: "910.00",
        quantity: 1,
        image: "https://cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-79_b56b789a-ec45-4f21-b119-bd42588f4e87_medium.jpg?v=1595414501",
        imageSlick1: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-4_d4473519-8847-44ff-b320-215ed44f0739_2000x.jpg?v=1595414385",
        imageSlick2: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-6_af294e14-5550-4b4a-ae7d-1202e8ae2c6b__medium.jpg?v=1595414385",
        imageSlick3: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-2_cbb8de02-5c75-4f03-b830-59a97a6c4948_2000x.jpg?v=1595414385"

    },
    {
        id: 6,
        name: "Closed Headset",
        price: "910.00",
        quantity: 1,
        star: "for",
        image: "https://cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-41_8c210410-9eb0-4933-a336-605fbe2af6eb_medium.jpg?v=1595414441",
        imageSlick1: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-39_e73afc4e-b246-4c83-8207-68b105703781_2000x.jpg?v=1595414441",
        imageSlick2: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-38_c115d279-38df-4c70-a5ec-78696455d32f_2000x.jpg?v=1595414441",
        imageSlick3: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-41_8c210410-9eb0-4933-a336-605fbe2af6eb__medium.jpg?v=1595414441",

    },
    {
        id: 7,
        name: "Commando Headset",
        price: "860.00",
        quantity: 1,
        star: "for",
        image: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-79_b56b789a-ec45-4f21-b119-bd42588f4e87_2000x.jpg?v=1595414501",
        imageSlick1: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-81_507b9dee-5e8d-4f10-8256-495f33a79508_2000x.jpg?v=1595414501",
        imageSlick2: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-80_8c4389b7-1535-420f-b8fc-b8c3a0474bea_2000x.jpg?v=1595414501",
        imageSlick3: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-83_d394931c-9168-42e9-b18c-0c10be6a2950_2000x.jpg?v=1595414501"

    },
    {
        id: 8,
        name: "HP BTP1 Headset",
        price: "910.00",
        quantity: 1,
        image: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-27_1aaae500-ff30-40e6-a4a0-0caddfebe780_2000x.jpg?v=1595414425",
        imageSlick1: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-30_368780a6-fd6c-4103-b0e4-2d9c38c19617_2000x.jpg?v=1595414425",
        imageSlick2: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-28_758cbb62-1bf0-4f29-aeb1-cfe122675bf5_2000x.jpg?v=1595414425",
        imageSlick3: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-31_28cdd27f-0d39-403a-b666-a9b8fca49a1b_2000x.jpg?v=1595414425"

    },
    {
        id: 9,
        name: "HP Delux Headset",
        price: "910.00",
        quantity: 1,
        image: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-57_2000x.jpg?v=1595414471",
        imageSlick1: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-60_2000x.jpg?v=1595414471",
        imageSlick2: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-28_758cbb62-1bf0-4f29-aeb1-cfe122675bf5_2000x.jpg?v=1595414425",
        imageSlick3: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-62_607bc09b-fdd1-42aa-8d06-efabe9450477_2000x.jpg?v=1595414471"
    },
    {
        id: 10,
        name: "HP Gaming Headset",
        price: "910.00",
        quantity: 1,
        image: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-7_4448e6c4-243a-4b81-8009-765baaa6ec64_2000x.jpg?v=1595414392",
        imageSlick1: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-9_b8e4188f-8af9-4ad9-b598-d8443fc55e06_2000x.jpg?v=1595414392",
        imageSlick2: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-8_6d88d9c6-ac96-4bcc-b811-1258644ba09b_2000x.jpg?v=1595414392",
        imageSlick3: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-11_cb37283b-c5ff-401c-b137-7e3a0fba0ff0_2000x.jpg?v=1595414392"

    },
    {
        id: 11,
        name: "Noise Isolated",
        price: "900.00",
        quantity: 1,
        star: "for",
        image: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-63_cc0cc1b4-2e83-476f-8afa-3431effa928d_2000x.jpg?v=1595414479",
        imageSlick1: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-65_6afb4717-aa7e-44ee-a2ab-dbcc5e6f55dc_2000x.jpg?v=1595414479",
        imageSlick2: "https://cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-64_3621a5ad-8384-4054-9fdc-6dfaa6fa458b_2000x.jpg?v=1595414479",
        imageSlick3: "https://cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-68_3c53de30-45e4-4658-9f7c-693d2b8584f3_2000x.jpg?v=1595414479",

    },
    {
        id: 12,
        name: "HP Turbo Headset",
        price: "910.00",
        quantity: 1,
        image: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-17_9c7b4bf4-0a0f-498e-ba3f-08160bb9629d_2000x.jpg?v=1595414407",
        imageSlick1: "https://cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-19_4e7fd045-4da0-4ff3-a666-041679e0f910_2000x.jpg?v=1595414407",
        imageSlick2: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-18_63e6fdee-0e63-457a-a386-866021f30f66_2000x.jpg?v=1595414407",
        imageSlick3: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-21_55777920-c226-469a-8939-f9e5e66f5fcb_2000x.jpg?v=1595414407",

    },
    {
        id: 13,
        name: "HP Mollis Headset",
        price: "800.00",
        quantity: 1,
        image: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-74_b2f7f67a-c187-49bf-bf46-31bf21adda24_2000x.jpg?v=1595414493",
        imageSlick1: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-76_6b5f4808-650e-4159-a9ca-8c78455e1fce_2000x.jpg?v=1595414493",
        imageSlick2: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-75_ef0f54c0-2f66-4eb5-97c6-af0fde251bb6_2000x.jpg?v=1595414493",
        imageSlick3: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-78_3041a308-2488-4d2a-a5cd-7982494c2580_2000x.jpg?v=1595414493",

    },
    {
        id: 14,
        name: "Over Ear Headset",
        price: "910.00",
        quantity: 1,
        image: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-22_d93f8cfe-9991-4402-8b1a-fcba95cc71f8_2000x.jpg?v=1595414416",
        imageSlick1: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-24_9d611ad2-4bc7-4cea-995e-918176cc06a5_2000x.jpg?v=1595414416",
        imageSlick2: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-23_8c844369-050b-4f83-8d53-0c57cbba0350_2000x.jpg?v=1595414416",
        imageSlick3: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-26_562383f0-7035-41a7-944a-2000px.jpg?v=1595414416",

    },
    {
        id: 15,
        name: "Red Headset",
        price: "910.00",
        quantity: 1,
        image: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-47_8ef385b8-8931-4b0c-a020-2a9266a1e329_2000x.jpg?v=1595414457",
        imageSlick1: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-49_1b79e849-1cfa-4004-bd37-1dd5f9ef2927_2000x.jpg?v=1595414457",
        imageSlick2: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-48_a2fb0878-9eb0-4d8e-99ae-d45c836a0d17_2000x.jpg?v=1595414457",
        imageSlick3: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-51_2dd778c7-3c03-4169-b2c1-415265842fd1_2000x.jpg?v=1595414457",
    },

    {
        id: 16,
        name: "Stereo Bass",
        price: "910.00",
        quantity: 1,
        image: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-12_424cc3a3-c350-4ce8-b34d-d7310909d16a_2000x.jpg?v=1595414399",
        imageSlick1: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-14_654ae108-be89-4941-a160-a66f2e8d5a00_2000x.jpg?v=1595414399",
        imageSlick2: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-13_5eb3def1-fc67-4d57-abb1-f9a19545bb06_2000x.jpg?v=1595414399",
        imageSlick3: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-16_4a361452-1708-4ddb-9703-69302ba26ee2_2000x.jpg?v=1595414399",
    },
    {
        id: 17,
        name: "Wireless Headset",
        price: "910.00",
        quantity: 1,
        image: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-32_b0a2b2ba-1132-4817-8177-753d2f60949a_2000x.jpg?v=1595414433",
        imageSlick1: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-34_679ec680-9c79-4f23-9561-bb8deec0b80c_2000x.jpg?v=1595414433",
        imageSlick2: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-33_6b308e94-f741-477a-a6ee-d08a6a748bee_2000x.jpg?v=1595414433",
        imageSlick3: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-36_20c9d831-e395-48f5-9cf9-7ca73aa0291b_2000x.jpg?v=1595414433",
    },
    {
        id: 18,
        name: "X2 Noise Isolated",
        price: "850.00",
        quantity: 1,
        image: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-69_704862bf-b9c1-447a-9c43-c3ffb11f25ce_2000x.jpg?v=1595414486",
        imageSlick1: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-71_4320b598-a1e7-477e-9e4f-df875bcf8513_2000x.jpg?v=1595414486",
        imageSlick2: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-70_7f3466cb-430b-46c1-b7d7-f302c650f04c_2000x.jpg?v=1595414486",
        imageSlick3: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-73_2f78db8f-0492-4325-9cce-ca6fa255fb54_2000x.jpg?v=1595414486",
    },
    {
        id: 19,
        name: "X2 Stereo",
        price: "910.00",
        quantity: 1,
        image: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-52_9437b4b1-02b6-4dc2-af44-c87bb82cf593_2000x.jpg?v=1595414464",
        imageSlick1: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-54_36804803-6ac6-42d7-a05d-3690f0026060_2000x.jpg?v=1595414464",
        imageSlick2: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-53_a40e2b52-bdad-4d14-9387-b0f07494cc61_2000x.jpg?v=1595414464",
        imageSlick3: "//cdn.shopify.com/s/files/1/0434/2520/2335/products/shop-56_2000x.jpg?v=1595414464",
    },



]

module.exports = {
    product,
}
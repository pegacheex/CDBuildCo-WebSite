// Feature: cd-enterprises-website — Product_Data_Layer
// All product text is referenced via i18n keys only — no hardcoded strings.

export interface SubProduct {
  id: string;
  nameKey: string;
  descriptionKey: string;
  brand?: string;
  isAuthorisedDealer?: boolean;
  rangeKey?: string;
  image?: string; // optional product image URL
}

export interface ProductCategory {
  id: string;
  nameKey: string;
  descriptionKey: string;
  iconName: string;
  authorisedBrand?: string;
  subProducts: SubProduct[];
  metaTitleKey: string;
  metaDescriptionKey: string;
}

export const products: ProductCategory[] = [
  {
    id: "acc-cement",
    nameKey: "products.accCement.name",
    descriptionKey: "products.accCement.description",
    iconName: "cement-bag",
    authorisedBrand: "ACC Cement",
    subProducts: [
      {
        id: "concrete-plus",
        nameKey: "products.accCement.concretePlus.name",
        descriptionKey: "products.accCement.concretePlus.description",
        image: "/products/18_acc_concrete_plus_cement_50kg.png",
      },
      {
        id: "suraksha-power",
        nameKey: "products.accCement.surakshapower.name",
        descriptionKey: "products.accCement.surakshapower.description",
        image: "/products/17_acc_suraksha_power_cement_50kg.png",
      },
    ],
    metaTitleKey: "products.accCement.metaTitle",
    metaDescriptionKey: "products.accCement.metaDescription",
  },
  {
    id: "waterproofing",
    nameKey: "products.waterproofing.name",
    descriptionKey: "products.waterproofing.description",
    iconName: "water-drop",
    authorisedBrand: "Dr. Fixit (Pidilite)",
    subProducts: [
      {
        id: "drfixit",
        nameKey: "products.waterproofing.drFixit.name",
        descriptionKey: "products.waterproofing.drFixit.description",
        brand: "Dr. Fixit (Pidilite)",
        image: "/products/16_dr_fixit_waterproofing_expert_20kg.png",
      },
    ],
    metaTitleKey: "products.waterproofing.metaTitle",
    metaDescriptionKey: "products.waterproofing.metaDescription",
  },
  {
    id: "tmt-bars",
    nameKey: "products.tmtBars.name",
    descriptionKey: "products.tmtBars.description",
    iconName: "rebar",
    subProducts: [
      {
        id: "jsw-neosteel",
        nameKey: "products.tmtBars.jswNeosteel.name",
        descriptionKey: "products.tmtBars.jswNeosteel.description",
        image: "/products/15_jsw_neosteel_tmt_rebar.png",
        brand: "JSW",
      },
    ],
    metaTitleKey: "products.tmtBars.metaTitle",
    metaDescriptionKey: "products.tmtBars.metaDescription",
  },
  {
    id: "structural-steel",
    nameKey: "products.structuralSteel.name",
    descriptionKey: "products.structuralSteel.description",
    iconName: "beam",
    authorisedBrand: "JSW Steel",
    subProducts: [
      {
        id: "ms-channels",
        nameKey: "products.structuralSteel.ismc.name",
        descriptionKey: "products.structuralSteel.ismc.description",
        image: "/products/14_ismc_100_steel_channel.png",
      },
      {
        id: "h-beams",
        nameKey: "products.structuralSteel.ishb.name",
        descriptionKey: "products.structuralSteel.ishb.description",
        image: "/products/13_ishb_300_steel_ibeam.png",
      },
      {
        id: "ms-angles",
        nameKey: "products.structuralSteel.isa.name",
        descriptionKey: "products.structuralSteel.isa.description",
        image: "/products/12_isa_angle_steel_100x100x10.png",
      },
      {
        id: "ms-square-pipes",
        nameKey: "products.structuralSteel.msSquare.name",
        descriptionKey: "products.structuralSteel.msSquare.description",
        image: "/products/10_rhs_steel_tube_100x100x6_a.png",
      },
      {
        id: "ms-round-pipes",
        nameKey: "products.structuralSteel.msRound.name",
        descriptionKey: "products.structuralSteel.msRound.description",
        image: "/products/09_ms_pipe_IS1239.png",
      },
      {
        id: "ms-flat-bars",
        nameKey: "products.structuralSteel.msFlat.name",
        descriptionKey: "products.structuralSteel.msFlat.description",
        image: "/products/08_ms_flat_steel_bars_IS2062.png",
      },
    ],
    metaTitleKey: "products.structuralSteel.metaTitle",
    metaDescriptionKey: "products.structuralSteel.metaDescription",
  },
  {
    id: "roofing-sheets",
    nameKey: "products.roofingSheets.name",
    descriptionKey: "products.roofingSheets.description",
    iconName: "roof",
    authorisedBrand: "JSW",
    subProducts: [
      {
        id: "gi-plain",
        nameKey: "products.roofingSheets.giPlain.name",
        descriptionKey: "products.roofingSheets.giPlain.description",
        image: "/products/07_galvanized_corrugated_roofing_sheets.png",
      },
      {
        id: "color-coated",
        nameKey: "products.roofingSheets.colorCoated.name",
        descriptionKey: "products.roofingSheets.colorCoated.description",
        image: "/products/01_colored_corrugated_roofing_sheets.png",
      },
    ],
    metaTitleKey: "products.roofingSheets.metaTitle",
    metaDescriptionKey: "products.roofingSheets.metaDescription",
  },
  {
    id: "cera-bathroom-fittings",
    nameKey: "products.ceraBathroom.name",
    descriptionKey: "products.ceraBathroom.description",
    iconName: "faucet",
    subProducts: [
      {
        id: "sanitaryware",
        nameKey: "products.ceraBathroom.sanitaryware.name",
        descriptionKey: "products.ceraBathroom.sanitaryware.description",
        image: "/products/06_cera_toilets_washbasins_display.png",
      },
      {
        id: "faucets",
        nameKey: "products.ceraBathroom.faucets.name",
        descriptionKey: "products.ceraBathroom.faucets.description",
        image: "/products/05_cera_taps_faucets_display.png",
      },
    ],
    metaTitleKey: "products.ceraBathroom.metaTitle",
    metaDescriptionKey: "products.ceraBathroom.metaDescription",
  },
  {
    id: "samruddhi-water-tanks",
    nameKey: "products.samruddhi.name",
    descriptionKey: "products.samruddhi.description",
    iconName: "water-tank",
    authorisedBrand: "Samruddhi",
    subProducts: [
      {
        id: "loft-tanks",
        nameKey: "products.samruddhi.loftTanks.name",
        descriptionKey: "products.samruddhi.loftTanks.description",
        image: "/products/02_samruddhi_water_tank_1000L_vertical.png",
      },
      {
        id: "underground-tanks",
        nameKey: "products.samruddhi.undergroundTanks.name",
        descriptionKey: "products.samruddhi.undergroundTanks.description",
        image: "/products/04_samruddhi_water_tank_1000L_horizontal.png",
      },
    ],
    metaTitleKey: "products.samruddhi.metaTitle",
    metaDescriptionKey: "products.samruddhi.metaDescription",
  },
  {
    id: "ms-grills-manhole-covers",
    nameKey: "products.msGrills.name",
    descriptionKey: "products.msGrills.description",
    iconName: "grill",
    subProducts: [],
    metaTitleKey: "products.msGrills.metaTitle",
    metaDescriptionKey: "products.msGrills.metaDescription",
  },
  {
    id: "cement-blocks",
    nameKey: "products.cementBlocks.name",
    descriptionKey: "products.cementBlocks.description",
    iconName: "cement-bag",    subProducts: [
      {
        id: "4-inch-block",
        nameKey: "products.cementBlocks.fourInch.name",
        descriptionKey: "products.cementBlocks.fourInch.description",
        image: "/products/22 4 inch block.png",
      },
      {
        id: "6-inch-block",
        nameKey: "products.cementBlocks.sixInch.name",
        descriptionKey: "products.cementBlocks.sixInch.description",
        image: "/products/19 Cement Blocks.png",
      },
    ],
    metaTitleKey: "products.cementBlocks.metaTitle",
    metaDescriptionKey: "products.cementBlocks.metaDescription",
  },
  {
    id: "tiles",
    nameKey: "products.tiles.name",
    descriptionKey: "products.tiles.description",
    iconName: "tile",
    subProducts: [
      {
        id: "kitchen-tiles",
        nameKey: "products.tiles.kitchen.name",
        descriptionKey: "products.tiles.kitchen.description",
        image: "/products/20 kitchen tiles.png",
      },
      {
        id: "bathroom-tiles",
        nameKey: "products.tiles.bathroom.name",
        descriptionKey: "products.tiles.bathroom.description",
        image: "/products/21 Bathroom Tile.png",
      },
      {
        id: "hall-tiles",
        nameKey: "products.tiles.hall.name",
        descriptionKey: "products.tiles.hall.description",
        image: "/products/23 Hall tile.png",
      },
      {
        id: "rough-tiles",
        nameKey: "products.tiles.rough.name",
        descriptionKey: "products.tiles.rough.description",
        image: "/products/24 Rough tile.png",
      },
    ],
    metaTitleKey: "products.tiles.metaTitle",
    metaDescriptionKey: "products.tiles.metaDescription",
  },
];

export function generateProductStaticParams(): { category: string }[] {
  return products.map((p) => ({ category: p.id }));
}

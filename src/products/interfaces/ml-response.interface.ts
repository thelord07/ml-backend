export interface MlResponse {
    site_id:                   string;
    country_default_time_zone: string;
    query:                     string;
    paging:                    Paging;
    results:                   Result[];
    sort:                      Sort;
    available_sorts:           Sort[];
    filters:                   Filter[];
    available_filters:         AvailableFilter[];
}

export interface AvailableFilter {
    id:     string;
    name:   string;
    type:   string;
    values: AvailableFilterValue[];
}

export interface AvailableFilterValue {
    id:      string;
    name:    string;
    results: number;
}

export interface Sort {
    id:   string;
    name: string;
}

export interface Filter {
    id:     string;
    name:   string;
    type:   string;
    values: FilterValue[];
}

export interface FilterValue {
    id:              string;
    name:            string;
    path_from_root?: Sort[];
}

export interface Paging {
    total:           number;
    primary_results: number;
    offset:          number;
    limit:           number;
}

export interface Result {
    id:                  string;
    title:               string;
    condition:           string;
    thumbnail_id:        string;
    catalog_product_id:  string;
    listing_type_id:     string;
    permalink:           string;
    buying_mode:         string;
    site_id:             string;
    category_id:         string;
    domain_id:           string;
    thumbnail:           string;
    currency_id:         string;
    order_backend:       number;
    price:               number;
    original_price:      null;
    sale_price:          null;
    sold_quantity:       number;
    available_quantity:  number;
    official_store_id:   null;
    use_thumbnail_id:    boolean;
    accepts_mercadopago: boolean;
    tags:                string[];
    shipping:            Shipping;
    stop_time:           Date;
    seller:              Seller;
    seller_address:      SellerAddress;
    address:             Address;
    attributes:          Attribute[];
    installments:        Installments;
    winner_item_id:      null;
    catalog_listing:     boolean;
    discounts:           null;
    promotions:          any[];
    inventory_id:        null;
}

export interface Address {
    state_id:   string;
    state_name: string;
    city_id:    string;
    city_name:  string;
}

export interface Attribute {
    id:                   string;
    name:                 string;
    value_id:             string;
    value_name:           string;
    attribute_group_id:   string;
    attribute_group_name: string;
    value_struct:         Struct | null;
    values:               AttributeValue[];
    source:               number;
    value_type:           string;
}

export interface Struct {
    number: number;
    unit:   string;
}

export interface AttributeValue {
    id:     string;
    name:   string;
    struct: Struct | null;
    source: number;
}

export interface Installments {
    quantity:    number;
    amount:      number;
    rate:        number;
    currency_id: string;
}

export interface Seller {
    id:                 number;
    nickname:           string;
    car_dealer:         boolean;
    real_estate_agency: boolean;
    _:                  boolean;
    registration_date:  Date;
    tags:               string[];
    car_dealer_logo:    string;
    permalink:          string;
    seller_reputation:  SellerReputation;
}

export interface SellerReputation {
    level_id:            string;
    power_seller_status: string;
    transactions:        Transactions;
    metrics:             Metrics;
}

export interface Metrics {
    sales:                 Sales;
    claims:                Cancellations;
    delayed_handling_time: Cancellations;
    cancellations:         Cancellations;
}

export interface Cancellations {
    period: string;
    rate:   number;
    value:  number;
}

export interface Sales {
    period:    string;
    completed: number;
}

export interface Transactions {
    canceled:  number;
    completed: number;
    period:    string;
    ratings:   Ratings;
    total:     number;
}

export interface Ratings {
    negative: number;
    neutral:  number;
    positive: number;
}

export interface SellerAddress {
    comment:      string;
    address_line: string;
    zip_code:     string;
    id:           null;
    latitude:     null;
    longitude:    null;
    country:      Sort;
    state:        Sort;
    city:         Sort;
}

export interface Shipping {
    logistic_type: string;
    mode:          string;
    store_pick_up: boolean;
    free_shipping: boolean;
    tags:          string[];
    promise:       null;
}
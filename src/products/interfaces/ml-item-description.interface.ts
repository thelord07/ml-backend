export interface MLItemDescription {
    text:         string;
    plain_text:   string;
    last_updated: Date;
    date_created: Date;
    snapshot:     Snapshot;
}

export interface Snapshot {
    url:    string;
    width:  number;
    height: number;
    status: string;
}
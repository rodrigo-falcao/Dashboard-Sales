export interface LeadPostData {
    name: string
    email: string
    phone: string
}

export interface LeadData extends LeadPostData {
    id: number
}

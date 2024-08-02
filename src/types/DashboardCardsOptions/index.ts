export interface DashboardCardOption {
    urlTarget: string;
    title: string;
    subtitle: string;
    image: string;
    bootColor: string;
    bootAnimation: string;
}

export interface DashboardCard {
    config: DashboardCardOption
}
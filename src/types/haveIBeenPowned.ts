type HaveIBeenPowned = {
	Breaches: {
		Name: string;
		Title: string;
		Domain: string;
		BreachDate: string;
		AddedDate: string;
		ModifiedDate: string;
		PwnCount: number;
		Description: string;
		LogoPath: string;
		DataClasses: string[];
		IsVerified: boolean;
		IsFabricated: boolean;
		IsSensitive: boolean;
		IsRetired: boolean;
		IsSpamList: boolean;
		IsMalware: boolean;
	}[];

	Pastes: {
		Id: string;
		Source: string;
		Title: string;
		Date: string;
		EmailCount: number;
	}[];
};
export default HaveIBeenPowned

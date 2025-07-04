import { getFallbackLanguage } from "@/lib/i18n/fallback";
import deepmerge from "deepmerge";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import LenisScrollProvider from "./LenisProvider";

const Providers = async ({
	children,
	locale,
} : {
	children: React.ReactNode;
	locale: string;
}) => {
	// NEXT-INTL
	const userMessages = await getMessages({ locale });
	const fallbackMessages = await getMessages({ locale: getFallbackLanguage({ locale }) });
	const messages = deepmerge(fallbackMessages, userMessages);
	return (
		<NextIntlClientProvider locale={locale} messages={messages}>
			<LenisScrollProvider>
				{children}
			</LenisScrollProvider>
		</NextIntlClientProvider>
	);
};

export default Providers;
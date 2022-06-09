import info from './icons/info.svg';
import padlock from './icons/padlock.svg';
import starWhite from './icons/star-white.svg';
import starYellow from './icons/star-yellow.svg';
import logo from './logo.svg';
import logoWithWhiteBackground from './logo-with-white-background.svg';
import logoPng from './logo.png';
import accessDenied from './access-denied.svg';
import check from './check.svg';
import checkmarkLock from './checkmark-lock.svg';
import dialogCategory from './dialog-category.svg';
import dropPhoto from './drop-photo.svg';
import email from './email.svg';
import locationPin from './location-pin.svg';
import lockFolder from './lock-folder.svg';
import megaphone from './megaphone.svg';
import reportNews from './report-news.svg';
import emptyStar from './empty-star.svg';
import fullStar from './full-star.svg';
import openLock from './open-lock.svg';
import user from './user.svg';
import categoryDialog from './category-dialog.svg';

const ImageURLs = {
	icons: {
		info,
		padlock,
		starWhite,
		starYellow,
		accessDenied,
		check,
		checkmarkLock,
		reportNews,
		megaphone,
		lockFolder,
		locationPin,
		dialogCategory,
		dropPhoto,
		email,
		emptyStar,
		fullStar,
		openLock,
		user,
		categoryDialog,
	},
	logo,
	logoWithWhiteBackground,

	/**
	 * The PNG versions of the logo exist to use with the OpenGraph meta tags, because
	 * they don't support SVG. These images SHOULD NOT be used in the website itself,
	 * as the svg version is lighter, and therefore preferable.
	 */
	logoPng,
};

export default ImageURLs;

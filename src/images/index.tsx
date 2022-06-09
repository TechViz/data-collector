/** *************************************************************************
 *                         What is this file?                               *
 *                                                                          *
 * This file contains all imports to all images, icons and etc... It has a  *
 * base component that all images should share, and has to organize all     *
 * images in a single export default object.                                *
 *                                                                          *
 ************************************************************************** */

import React from 'react';
import type { FlattenSimpleInterpolation } from 'styled-components';
import type { StaticImageData } from 'next/image';
import styled from 'styled-components';
import ImageURLs from './image-urls';

const hasWebpCounterpartRegex = /\.(png|jpe?g)$/;

const Picture = styled.picture<{ css?: FlattenSimpleInterpolation }>`
	width: 100%;
	height: 100%;
	${({ css }) => css || ``};
`;

const Image = styled.img<{ fit: string }>`
	object-fit: ${({ fit }) => fit};
	width: inherit;
	height: inherit;
	user-drag: none;
	user-select: none;
`;

type BaseImageProps = React.PropsWithChildren<{
	imageData: StaticImageData;
	alt: string;
	css?: FlattenSimpleInterpolation;
	fit?:
		| 'contain'
		| 'cover'
		| 'fill'
		| 'inherit'
		| 'initial'
		| 'none'
		| 'revert'
		| 'scale-down'
		| 'unset';
}> &
	Omit<React.ComponentProps<'picture'>, 'ref'>;

/**
 * This component is the base of all images in the App. It will apply some default styling,
 * and will automaticaly handle webp sources.
 */
const BaseImage = React.forwardRef<HTMLPictureElement, BaseImageProps>(
	({ imageData: { src }, alt, fit = `contain`, ...props }, ref) => {
		const webpSrc = src.match(hasWebpCounterpartRegex)
			? src.replace(hasWebpCounterpartRegex, `.webp`)
			: ``;

		return (
			<Picture {...props} ref={ref}>
				{webpSrc && <source srcSet={webpSrc} type="image/webp" />}
				<Image src={src} alt={alt} fit={fit} />
			</Picture>
		);
	},
);

const Images = {
	logo: styled(BaseImage).attrs(({ alt }) => ({
		imageData: ImageURLs.logo,
		alt: alt || `Logo Tech Viz`,
	}))``,
	icons: {
		info: styled(BaseImage).attrs(({ alt }) => ({
			imageData: ImageURLs.icons.info,
			alt: alt || ``,
		}))``,
		padlock: styled(BaseImage).attrs(({ alt }) => ({
			imageData: ImageURLs.icons.padlock,
			alt: alt || ``,
		}))``,
		starWhite: styled(BaseImage).attrs(({ alt }) => ({
			imageData: ImageURLs.icons.starWhite,
			alt: alt || ``,
		}))``,
		starYellow: styled(BaseImage).attrs(({ alt }) => ({
			imageData: ImageURLs.icons.starYellow,
			alt: alt || ``,
		}))``,
		locationPin: styled(BaseImage).attrs(({ alt }) => ({
			imageData: ImageURLs.icons.locationPin,
			alt: alt || ``,
		}))``,
		emptyStar: styled(BaseImage).attrs(({ alt }) => ({
			imageData: ImageURLs.icons.emptyStar,
			alt: alt || ``,
		}))``,
		fullStar: styled(BaseImage).attrs(({ alt }) => ({
			imageData: ImageURLs.icons.fullStar,
			alt: alt || ``,
		}))``,
		checkmarkLock: styled(BaseImage).attrs(({ alt }) => ({
			imageData: ImageURLs.icons.checkmarkLock,
			alt: alt || ``,
		}))``,
		megaphone: styled(BaseImage).attrs(({ alt }) => ({
			imageData: ImageURLs.icons.megaphone,
			alt: alt || ``,
		}))``,
		accessDenied: styled(BaseImage).attrs(({ alt }) => ({
			imageData: ImageURLs.icons.accessDenied,
			alt: alt || ``,
		}))``,
		lockFolder: styled(BaseImage).attrs(({ alt }) => ({
			imageData: ImageURLs.icons.lockFolder,
			alt: alt || ``,
		}))``,
		dropPhoto: styled(BaseImage).attrs(({ alt }) => ({
			imageData: ImageURLs.icons.dropPhoto,
			alt: alt || ``,
		}))``,
		reportNews: styled(BaseImage).attrs(({ alt }) => ({
			imageData: ImageURLs.icons.reportNews,
			alt: alt || ``,
		}))``,
		email: styled(BaseImage).attrs(({ alt }) => ({
			imageData: ImageURLs.icons.email,
			alt: alt || ``,
		}))``,
		openLock: styled(BaseImage).attrs(({ alt }) => ({
			imageData: ImageURLs.icons.openLock,
			alt: alt || ``,
		}))``,
		user: styled(BaseImage).attrs(({ alt }) => ({
			imageData: ImageURLs.icons.user,
			alt: alt || ``,
		}))``,
		categoryDialog: styled(BaseImage).attrs(({ alt }) => ({
			imageData: ImageURLs.icons.categoryDialog,
			alt: alt || ``,
		}))``,
	},
};

export default Images;

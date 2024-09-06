/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * ImmichFrame.WebApi
 * 1.0
 * DO NOT MODIFY - This file has been generated using oazapfts.
 * See https://www.npmjs.com/package/oazapfts
 */
import * as Oazapfts from "@oazapfts/runtime";
export const defaults: Oazapfts.Defaults<Oazapfts.CustomHeaders> = {
    headers: {},
    baseUrl: "/",
};
const oazapfts = Oazapfts.runtime(defaults);
export const servers = {};
export type ExifResponseDto = {
    city?: string | null;
    country?: string | null;
    dateTimeOriginal?: string | null;
    description?: string | null;
    exifImageHeight?: number | null;
    exifImageWidth?: number | null;
    exposureTime?: string | null;
    fNumber?: number | null;
    fileSizeInByte?: number | null;
    focalLength?: number | null;
    iso?: number | null;
    latitude?: number | null;
    lensModel?: string | null;
    longitude?: number | null;
    make?: string | null;
    model?: string | null;
    modifyDate?: string | null;
    orientation?: string | null;
    projectionType?: string | null;
    rating?: number | null;
    state?: string | null;
    timeZone?: string | null;
    additionalProperties?: {
        [key: string]: any;
    } | null;
};
export type UserAvatarColor = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type UserResponseDto = {
    avatarColor: UserAvatarColor;
    email: string;
    id: string;
    name: string;
    profileImagePath: string;
    additionalProperties?: {
        [key: string]: any;
    } | null;
};
export type AssetFaceWithoutPersonResponseDto = {
    boundingBoxX1?: number;
    boundingBoxX2?: number;
    boundingBoxY1?: number;
    boundingBoxY2?: number;
    id: string;
    imageHeight?: number;
    imageWidth?: number;
    additionalProperties?: {
        [key: string]: any;
    } | null;
};
export type PersonWithFacesResponseDto = {
    birthDate?: string | null;
    faces: AssetFaceWithoutPersonResponseDto[];
    id: string;
    isHidden?: boolean;
    name: string;
    thumbnailPath: string;
    updatedAt?: string;
    additionalProperties?: {
        [key: string]: any;
    } | null;
};
export type SmartInfoResponseDto = {
    objects?: string[] | null;
    tags?: string[] | null;
    additionalProperties?: {
        [key: string]: any;
    } | null;
};
export type AssetStackResponseDto = {
    assetCount?: number;
    id: string;
    primaryAssetId: string;
    additionalProperties?: {
        [key: string]: any;
    } | null;
};
export type TagResponseDto = {
    color?: string | null;
    createdAt: string;
    id: string;
    name: string;
    parentId?: string | null;
    updatedAt: string;
    value: string;
    additionalProperties?: {
        [key: string]: any;
    } | null;
};
export type AssetTypeEnum = 0 | 1 | 2 | 3;
export type AssetResponseDto = {
    checksum: string;
    deviceAssetId: string;
    deviceId: string;
    duplicateId?: string | null;
    duration: string;
    exifInfo?: ExifResponseDto;
    fileCreatedAt: string;
    fileModifiedAt: string;
    hasMetadata?: boolean;
    id: string;
    isArchived?: boolean;
    isFavorite?: boolean;
    isOffline?: boolean;
    isTrashed?: boolean;
    libraryId?: string | null;
    livePhotoVideoId?: string | null;
    localDateTime: string;
    originalFileName: string;
    originalMimeType?: string | null;
    originalPath: string;
    owner?: UserResponseDto;
    ownerId: string;
    people?: PersonWithFacesResponseDto[] | null;
    resized?: boolean;
    smartInfo?: SmartInfoResponseDto;
    stack?: AssetStackResponseDto;
    tags?: TagResponseDto[] | null;
    thumbhash?: string | null;
    "type": AssetTypeEnum;
    unassignedFaces?: AssetFaceWithoutPersonResponseDto[] | null;
    updatedAt: string;
    additionalProperties?: {
        [key: string]: any;
    } | null;
};
export type ProblemDetails = {
    "type"?: string | null;
    title?: string | null;
    status?: number | null;
    detail?: string | null;
    instance?: string | null;
    [key: string]: any;
};
export function getAsset(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: AssetResponseDto;
    }>("/Asset", {
        ...opts
    });
}
export function getImage(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchBlob<{
        status: 200;
        data: Blob;
    }>(`/Asset/${encodeURIComponent(id)}`, {
        ...opts
    });
}
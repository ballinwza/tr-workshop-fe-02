export enum CommunityEnum {
    HISTORY = 'history',
    FOOD = 'food',
    PETS = 'pets',
    HEALTH = 'health',
    FASHION = 'fashion',
    EXERCISE = 'exercise',
    OTHERS = 'others',
}

export const getCommunityEnumValues = (): string[] =>
    Object.values(CommunityEnum)

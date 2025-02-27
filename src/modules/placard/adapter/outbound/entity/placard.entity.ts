import { IUser } from '@/modules/user/domain/model/user.model'
import { CommunityEnum } from '@/sections/shared/enums/community.enum'

export interface PlacardEntity {
    id: string
    user: IUser
    title: string
    description: string
    community: CommunityEnum
}

export interface SavePlacardEntity {
    userId: string
    title: string
    description: string
    community: CommunityEnum
}

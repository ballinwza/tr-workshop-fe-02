import { IUser } from '@/modules/user/domain/model/user.model'
import { CommunityEnum } from '@/sections/shared/enums/community.enum'

export interface IPlacard {
    id: string
    userId: IUser
    title: string
    description: string
    commentId: string[]
    community: CommunityEnum
}

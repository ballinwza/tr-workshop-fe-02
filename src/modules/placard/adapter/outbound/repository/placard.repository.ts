import { IPlacardRepository } from '@/modules/placard/application/port/placard.repository.port'

import { axiosWithXApiKey } from '@/sections/shared/utils/fetchRule.utils'
import { PlacardEntity, SavePlacardEntity } from '../entity/placard.entity'

export class PlacardRepository implements IPlacardRepository {
    async getList(): Promise<PlacardEntity[]> {
        try {
            const response = await axiosWithXApiKey.get(`/placard/find/list`)
            const placardEntityList: PlacardEntity[] = response.data.data

            return placardEntityList
        } catch (error) {
            console.error('Error PlacardRepository.getList : ', error)
            throw error
        }
    }

    async getListByUserId(userId: string): Promise<PlacardEntity[]> {
        try {
            const response = await axiosWithXApiKey.get(
                `/placard/find/list/${userId}`,
            )
            const placardEntity: PlacardEntity[] = response.data.data

            return placardEntity
        } catch (error) {
            console.error('Error PlacardRepository.getListByUserId : ', error)
            throw error
        }
    }

    async getByPlacardId(id: string): Promise<PlacardEntity> {
        try {
            const response = await axiosWithXApiKey.get(`/placard/find/${id}`)
            const placardEntity = response.data.data
            return placardEntity
        } catch (error) {
            console.error('Error PlacardRepository.getByPlacardId : ', error)
            throw error
        }
    }

    async save(formValue: SavePlacardEntity): Promise<boolean> {
        try {
            const response = await axiosWithXApiKey.post(
                `/placard/save`,
                formValue,
            )
            return response.data.success
        } catch (error) {
            console.error('Error PlacardRepository.save : ', error)
            throw error
        }
    }
    async update(formValue: SavePlacardEntity): Promise<boolean> {
        try {
            const response = await axiosWithXApiKey.post(
                `/placard/update`,
                formValue,
            )
            return response.data.success
        } catch (error) {
            console.error('Error PlacardRepository.save : ', error)
            throw error
        }
    }

    async delete(id: string): Promise<boolean> {
        try {
            const response = await axiosWithXApiKey.post(`/placard/delete`, {
                id,
            })

            return response.data.data
        } catch (error) {
            console.error('Error PlacardRepository.delete : ', error)
            throw error
        }
    }
}

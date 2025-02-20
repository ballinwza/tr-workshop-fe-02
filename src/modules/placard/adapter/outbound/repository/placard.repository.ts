import { IPlacardRepository } from '@/modules/placard/application/port/placard.repository.port'
import { IPlacard } from '@/modules/placard/domain/model/placard.model'
import axios from 'axios'
import { PlacardEntityMapper } from '../mapper/placard.mapper'
import { axiosWithRules } from '@/sections/shared/utils/fetchRule.utils'

export class PlacardRepository implements IPlacardRepository {
    async getAll(): Promise<IPlacard[]> {
        try {
            const response = await axios.get(
                'http://localhost:8000/placard/find-all',
            )

            return PlacardEntityMapper.toDomainList(response.data)
        } catch (error) {
            console.error('Error PlacardRepository.getAll : ', error)
            return []
        }
    }

    async getByPlacardId(id: string): Promise<IPlacard | null> {
        try {
            const response = await axiosWithRules.get(`/placard/find/${id}`)

            return PlacardEntityMapper.toDomain(response.data)
        } catch (error) {
            console.error('Error PlacardRepository.getByPlacardId : ', error)
            return null
        }
    }
    async save(formValue: IPlacard): Promise<boolean> {
        try {
            await axiosWithRules.post(`/placard/save`, formValue)

            return true
        } catch (error) {
            console.error('Error PlacardRepository.save : ', error)
            return false
        }
    }
}

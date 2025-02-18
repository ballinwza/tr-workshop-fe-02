import styled from '@emotion/styled'

export const DropdownItem = styled.div<{ $active: boolean }>`
    background-color: ${({ $active }) =>
        $active ? 'var(--green-100)' : 'var(--white)'};

    &:first-of-type {
        padding-top: 14px;
    }
    &:last-of-type {
        padding-bottom: 14px;
    }
`

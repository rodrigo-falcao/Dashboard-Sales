import { highlightTextConvert } from '../../utils/highlightTextConvert'

describe('highlightTextConvert', () => {
    it('should return the correct text for "alert"', () => {
        expect(highlightTextConvert('alert')).toBe(
            '* Meta longe de ser atingida'
        )
    })
    it('should return the correct text for "success"', () => {
        expect(highlightTextConvert('success')).toBe(
            '* Meta do mês foi atingida'
        )
    })
    it('should return the correct text for "warning"', () => {
        expect(highlightTextConvert('warning')).toBe(
            '* Meta do mês quase alcançada'
        )
    })
    it('should return the default text for unknown input', () => {
        expect(highlightTextConvert('un')).toBe('* Sem dados no momento')
    })
})

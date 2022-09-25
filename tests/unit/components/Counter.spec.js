import { shallowMount, mount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => { 

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount( Counter )
    })
    // test('debe de hacer match con el snapshot', () => { 
    //     const wrapper = shallowMount( Counter )
    //     expect( wrapper.html() ).toMatchSnapshot()
    // }) 

    test('h2 debe tener valor por defecto "Counter"', () => {

        expect( wrapper.find('h2').exists()).toBeTruthy()

        const h2Value = wrapper.find('h2').text()

        expect( h2Value ).toBe( 'Counter' )
    })
    
    test('el valor por defecto debe ser 100 en p', () => { 
        //wrapper
        //pTags
        const pTag = wrapper.find('[data-testid="counter"]').text()
        //expect segundo p === 100
        expect( pTag ).toBe('100')
    })

    test('debe de incrementar  y decrementar en 1 el valor del contador', async() => {

        const [ increaseBtn, decreaseBtn ]  = wrapper.findAll('button')

        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        const value = wrapper.find('[data-testid="counter"]').text()

        expect( value ).toBe( '101' )
    })

    test('debe de establecer el valor por defecto', () => { 
        const { start } = wrapper.props()

        const value = wrapper.find('[data-testid="counter"]').text()

        expect( Number(value) ).toBe( start )
    })

})
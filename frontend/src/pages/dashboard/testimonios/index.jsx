// import axios from 'axios';
import { useTestimonials } from '@/hooks';
import {
    Layout,
    TestimonialItemDashboard,
    ButtonCreate, WarnDelete,
    FormNews,
    FormModifyNews,
    Loader,
    MessageModal
} from '@/components/Dashboard';
import { useEffect, useContext } from 'react';
import AppContext from '../../../../contexts/AppContext';

export default function Testimonials() {
    const { testimonials, showMessageModal } = useContext(AppContext);

    const {
        showModalForm,
        showModalWarn,
        showModalModify,
        createTestimonial,
        setCreateTestimonial,
        modifyTestimony,
        setModifyTestimony,
        showWarn,
        showForm,
        showModify,
        handlerDelete,
        handlerCreate,
        handlerModify,
        id,
        setId,
        postModify,
        setPostModify,
        stateGlobalTestimonials,
        loading,
        setLoading,
    } = useTestimonials();

    useEffect(() => {
        stateGlobalTestimonials()
    }, [])

    return (
        <Layout>
            <div className='flex justify-end'>
                <ButtonCreate
                    showModalForm={showModalForm}
                    setCreateTestimonial={setCreateTestimonial}
                />
            </div>
            <section className="grid grid-cols-1 lg:grid-cols-3 justify-items-center py-10 px-5 gap-5 w-full h-full">
                {
                    testimonials?.map(testimonial => (
                        <TestimonialItemDashboard
                            key={testimonial._id}
                            title={testimonial.title}
                            text={testimonial.description}
                            img={testimonial.picture}
                            showModalWarn={showModalWarn}
                            setId={setId}
                            id={testimonial._id}
                            showModalModify={showModalModify}
                            setPostModify={setPostModify}
                            setModifyTestimony={setModifyTestimony}
                        />
                    ))
                }
            </section>
            {loading && (
                <Loader />
            )}
            {showMessageModal && (
                <MessageModal />
            )}
            {showWarn && (
                <WarnDelete
                    handlerDelete={handlerDelete}
                    showModalWarn={showModalWarn}
                    id={id}
                    setLoading={setLoading}
                />
            )}
            {showForm && (
                <FormNews
                    showModalForm={showModalForm}
                    handlerCreate={handlerCreate}
                    createTestimonial={createTestimonial}
                    setLoading={setLoading}
                />
            )}
            {showModify && (
                <FormModifyNews
                    showModalModify={showModalModify}
                    handlerModify={handlerModify}
                    modifyTestimony={modifyTestimony}
                    ShowModify={postModify}
                    setLoading={setLoading}
                />
            )}
        </Layout>
    );
};

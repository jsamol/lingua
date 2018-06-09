import {connect} from 'react-redux';

import {removeSelectedCourseId, setSelectedCourseId} from "../../../actions/CoursesActions";

import Courses from "../../../components/mainpage/courses/Courses";

const checkKeywords = (keywords, course) => {
    if (!keywords || keywords.length === 0) {
        return true;
    }

    const keywordsSplit = keywords.toLowerCase()
                                  .replace(",", " ")
                                  .replace(":", " ")
                                  .replace(";", " ")
                                  .replace(/\s+/g, " ")
                                  .split(" ");

    let containsKeywords = true;

    keywordsSplit.forEach(keyword => {
        containsKeywords = containsKeywords
            && (course.name.toLowerCase().includes(keyword)
                || course.shortDescription.toLowerCase().includes(keyword)
                || course.description.toLowerCase().includes(keyword));
    });

    return containsKeywords;
};

const checkMinAndMaxPrice = (minPrice, maxPrice, course) => {
    const minPriceNum = parseFloat(minPrice);
    const maxPriceNum = parseFloat(maxPrice);

    const coursePrice = course.isFree ? "0" : course.price;
    const coursePriceNum = parseFloat(coursePrice);

    if (minPriceNum > -1 && maxPriceNum > -1) {
        return minPriceNum <= coursePriceNum && coursePriceNum <= maxPriceNum;
    } else if (minPriceNum > -1) {
        return minPriceNum <= coursePriceNum;
    } else if (maxPriceNum > -1) {
        return coursePriceNum <= maxPriceNum;
    }

    return true;
};

const checkFreeOnly = (freeOnly, isCourseFree) => {
    if (freeOnly) {
        return isCourseFree;
    }

    return true;
};

const getFilteredCourseWithImg = (state, baseFilter) => {
    const languages = state.languages;

    let filteredCourses = state.courses.filter(baseFilter);

    if (state.filterLanguages.length > 0) {
        filteredCourses = filteredCourses.filter(course => {
            return state.filterLanguages.includes(course.languageId);
        });
    }

    return filteredCourses.map(course => {
        const courseLanguage = languages.find(language => {
            return language.id === course.languageId;
        });
        course.img = courseLanguage ? courseLanguage.img : "";
        return course;
    })
};

const mapStateToProps = state => {
    return ({
        newCourses: getFilteredCourseWithImg(state, course => {
            return state.user &&
                !state.user.courses.includes(course.id) &&
                state.user.languages.includes(course.languageId) &&
                checkKeywords(state.advancedFilter.keywords, course) &&
                checkMinAndMaxPrice(state.advancedFilter.minPrice, state.advancedFilter.maxPrice, course) &&
                checkFreeOnly(state.advancedFilter.freeOnly, course.isFree
            )
        }),
        openCourses: getFilteredCourseWithImg(state, course => {
            return state.user && state.user.courses.includes(course.id) &&
                checkKeywords(state.advancedFilter.keywords, course)
        }),
        selectedCourseId: state.selectedCourseId
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        deselectCourse: () => {
            dispatch(removeSelectedCourseId());
        }
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
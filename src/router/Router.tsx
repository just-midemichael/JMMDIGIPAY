import React, { lazy } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Investments from '../pages/personalPages/Investments'
import Budget from '../pages/personalPages/Budget'
import Savings from '../pages/personalPages/Savings'
import Loans from '../pages/personalPages/Loans'
import Cards from '../pages/personalPages/Cards'
import ReportAccount from '../pages/helpPages/ReportAccount'
import FAQs from '../pages/helpPages/FAQs'
import ScamAwareness from '../pages/helpPages/ScamAwareness'
import GetHelp from '../pages/helpPages/GetHelp'
import About from '../pages/companyPages/About'
import Blog from '../pages/companyPages/Blog'
import Career from '../pages/companyPages/Career'
import Contact from '../pages/companyPages/Contact'
import Agents from '../pages/businessPages/Agents'
import POS from '../pages/businessPages/POS'
import BusinessRegistration from '../pages/businessPages/BusinessRegistration'
import NoMatchRoute from '../pages/noRoutePage/NoMatchRoute'
const LazyJoinDigipay =  React.lazy(() => import('../pages/JoinDigipay'))


//Personal Lazy Pages 
const LazyBudget = React.lazy(() => import('../pages/personalPages/Budget'))
const LazyInvestments = React.lazy(() => import('../pages/personalPages/Investments'))
const LazySavings = React.lazy(() => import('../pages/personalPages/Savings'))
const LazyLoans = React.lazy(() => import('../pages/personalPages/Loans'))
const LazyCards = React.lazy(() => import('../pages/personalPages/Cards'))

//Business Lazy Pages
const LazyBusinessRegistration = React.lazy(() => import('../pages/businessPages/BusinessRegistration'))
const LazyAgents = React.lazy(() => import('../pages/businessPages/Agents'))
const LazyPOS = React.lazy(() => import('../pages/businessPages/POS'))

//Company Lazy Pages
const LazyAbout = React.lazy(() => import('../pages/companyPages/About'))
const LazyBlog = React.lazy(() => import('../pages/companyPages/Blog'))
const LazyCareer = React.lazy(() => import('../pages/companyPages/Career'))
const LazyContact = React.lazy(() => import('../pages/companyPages/Contact'))

//Help Lazy Pages
const LazyGetHelp = React.lazy(() => import('../pages/helpPages/GetHelp'))
const LazyScamAwareness = React.lazy(() => import('../pages/helpPages/ScamAwareness'))
const LazyFAQs = React.lazy(() => import('../pages/helpPages/FAQs'))
const LazyReportAccount = React.lazy(() => import('../pages/helpPages/ReportAccount'))


const Router = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NoMatchRoute/>} />
        <Route path='joinDigipay' element={
          <React.Suspense><LazyJoinDigipay/></React.Suspense>} />
        
        {/* Personal Route */}
        <Route path='budget' element={
          <React.Suspense>< LazyBudget/></React.Suspense>}/>
        <Route path='investment' element={
          <React.Suspense>< LazyInvestments/></React.Suspense>}/>
        <Route path='saving' element={
          <React.Suspense>< LazySavings/></React.Suspense>}/>
        <Route path='loan' element={
          <React.Suspense>< LazyLoans/></React.Suspense>}/>
        <Route path='card' element={
          <React.Suspense>< LazyCards/></React.Suspense>}/>

        {/* Business Route */}
        <Route path='business-registration' element={
          <React.Suspense>< LazyBusinessRegistration/></React.Suspense>}/>
        <Route path='agent' element={
          <React.Suspense>< LazyAgents/></React.Suspense>}/>
        <Route path='pos' element={
          <React.Suspense>< LazyPOS/></React.Suspense>}/>
  

        {/* Company Route */}
        <Route path='about' element={
          <React.Suspense>< LazyAbout/></React.Suspense>}/>
        <Route path='blog' element={
          <React.Suspense>< LazyBlog/></React.Suspense>}/>
        <Route path='career' element={
          <React.Suspense>< LazyCareer/></React.Suspense>}/>
        <Route path='contact' element={
          <React.Suspense>< LazyContact/></React.Suspense>}/>
  

        {/* Help Route */}
        <Route path='help' element={
          <React.Suspense><LazyGetHelp/></React.Suspense>}/>
        <Route path='scam-awareness' element={
          <React.Suspense>< LazyScamAwareness/></React.Suspense>}/>
        <Route path='faqs' element={
          <React.Suspense>< LazyFAQs/></React.Suspense>}/>
        <Route path='report-account' element={
          <React.Suspense>< LazyReportAccount/></React.Suspense>}/>

    </Routes>
    </>
  )
}

export default Router
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 bg-gradient-to-r from-gray-100 to-slate-500">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">Earthquakers</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link to='/aboutpage' className="hover:underline me-4 md:me-6">About</Link>
        </li>
        <li>
            <a href="https://un.org.np/sites/default/files/doc_publication/2022-02/2021%20EQ%20ERP%20FINAL.pdf" target='_blank' className="hover:underline me-4 md:me-6">Contingency Plan</a>
        </li>
        <li>
            <a href="https://www.usgs.gov/faqs/can-we-cause-earthquakes-there-any-way-prevent-earthquakes#:~:text=We%20cannot%20prevent%20natural%20earthquakes,providing%20education%20on%20earthquake%20safety." className="hover:underline me-4 md:me-6">Prevention</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contact</a>
        </li>
    </ul>
</footer>
  )
}

export default Footer
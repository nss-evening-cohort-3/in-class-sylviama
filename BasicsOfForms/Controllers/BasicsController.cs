using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BasicsOfForms.Controllers
{
    public class BasicsController : Controller
    {
        // GET: Basics
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Angular()
        {
            return View();
        }

        public ActionResult Razor()
        {
            return View();
        }



        [HttpPost]
        public ActionResult Angular(FormCollection form)
        {
            return View();
        }

        [HttpPost]
        public ActionResult Razor(FormCollection form)
        {
            string email = form[1];
            return View();
        }

        [HttpPost]
        public ActionResult Index(FormCollection form)
        {
            string email = form[1];

            return View();
        }
    }
}
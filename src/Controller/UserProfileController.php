<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class UserProfileController
 * @package App\Controller
 */
class UserProfileController extends AbstractController
{
    /**
     * @Route("/users", name="users")
     */
    public function index()
    {
        return $this->render('user_profile/index.html.twig', [
            'controller_name' => 'UserProfileController',
        ]);
    }

    /**
     * @Route("/users/{id}", name="user_profile")
     * @param User $user
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function show(User $user)
    {
        return $this->render('user_profile/show.html.twig', [
            'user' => $user,
        ]);
    }
}

<?php

namespace App\Controller\Api;

use App\Entity\Skill;
use App\Entity\User;
use App\Entity\UserSkill;
use App\Repository\SkillRepository;
use Doctrine\ORM\EntityManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class UserSkillsController
 * @package App\Controller\Api
 */
class UserSkillsController extends AbstractController
{
    /**
     * @Route("/user-skills/add", name="add_skill", methods={"POST"})
     *
     * @param Request $request
     *
     * @return JsonResponse
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function addSkill(Request $request)
    {
        /** @var EntityManager $entityManager */
        $entityManager = $this->getDoctrine()->getManager();

        /** @var SkillRepository $skillRepository */
        $skillRepository = $entityManager->getRepository(Skill::class);

        /** @var User $user */
        $user = $this->getUser();

        /** @var Skill $skill */
        $skill = $skillRepository->findByName($request->query->get('skill_name'));

        if ($skill && $user) {
            $userSkill = new UserSkill();
            $userSkill->setUserId($user);
            $userSkill->setSkillId($skill);
            $userSkill->setLevel(UserSkill::SKILL_LEVEL_SENIOR);
            $userSkill->setCreatedAt(new \DateTime('now'));

            $entityManager->persist($userSkill);
            $entityManager->flush();

            return new JsonResponse('OK', 201);
        }

        throw new HttpException(400, "Invalid data");
    }
}
